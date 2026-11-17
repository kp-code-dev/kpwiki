
import 'dotenv/config'
import { getPayload } from 'payload'
import config from './src/payload.config'

const reset = async () => {
  const payload = await getPayload({ config })

  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PASSWORD

  if (!email || !password) {
    throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD are required')
  }

  const users = await payload.find({
    collection: 'users',
    where: {
      email: {
        equals: email,
      },
    },
    limit: 1,
    overrideAccess: true,
  })

  const user = users.docs[0]

  if (!user) {
    throw new Error('Admin user not found')
  }

  await payload.update({
    collection: 'users',
    id: user.id,
    data: {
      password,
    },
    overrideAccess: true,
  })

  await payload.db.updateOne({
    collection: 'users',
    data: {
      lockUntil: null,
      loginAttempts: 0,
    },
    where: {
      email: {
        equals: email,
      },
    },
  })

  console.log('Password reset successfully!')
  console.log('Account unlocked successfully!')

  process.exit(0)
}

reset().catch((error) => {
  console.error(error)
  process.exit(1)
})
