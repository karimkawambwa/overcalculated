import Messages from './messages'

export default function Login() {
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form
        className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action="/auth/sign-in"
        method="post"
      >
        <label className="text-md text-black" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 border mb-6 text-black"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md text-black" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 border mb-6 text-black"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button className="bg-orange-700 rounded px-4 py-2 text-white mb-2">
          Sign In
        </button>
        <button
          formAction="/auth/sign-up"
          className="border border-gray-700 rounded px-4 py-2 text-black mb-2"
        >
          Sign Up
        </button>
        <Messages />
      </form>
    </div>
  )
}
