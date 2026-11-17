import { getPayload } from 'payload'
import config from '../../payload.config'

const reset = async () => {
  const payload = await getPayload({ config })

  const users = await payload.find({
    collection: 'users',
    limit: 100,
    overrideAccess: true,
  })

  console.log('Existing users:')
  users.docs.forEach((user, index) => {
    console.log(`${index + 1}. ${user.email} | ${user.name}`)
  })

  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PASSWORD

  if (!email || !password) {
    throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD are required')
  }

  const user = users.docs.find((item) => item.email?.toLowerCase() === email.toLowerCase())

  if (!user) {
    throw new Error('Admin email not found')
  }

  await payload.update({
    collection: 'users',
    id: user.id,
    data: { password },
    overrideAccess: true,
  })

  console.log('Password updated successfully!')
  process.exit(0)
}

reset().catch((error) => {
  console.error(error)
  process.exit(1)
})
