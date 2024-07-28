import React from 'react'
import { useState, useMemo } from 'react'
import ReactLoading from 'react-loading';

export default function Complete() {
  const [input, setInput] = useState('')
  const [first, setfirst] = useState(0)
  const [answer, setAnswer] = useState('')
  const [heading, setHeading] = useState('What if...')
  const [subHeading, setSubHeading] = useState('Imagine alternate realities')
  const [loading, setLoading] = useState(false)


  const getAnswer = async () => {
    setLoading(true)
    const response = await fetch(
      `https://laughing-capybara-7xv7j4vgg52rgpj-3000.app.github.dev/whatif`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: input })
      }
    )
    const data = await response.text()
    setAnswer(data)
    setHeading(input)
    setSubHeading(data)

    console.log(data)
    setLoading(false)
  }


return (
       <>
    <section className="w-full h-dvh py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 items-center">
        <div className="flex flex-col justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl pb-3 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              {heading}
            </h1>
            <p className="max-w-auto text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
              {subHeading}
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2 mx-auto" style={{display: answer ? 'none' : undefined}}>
            <form className="flex space-x-2">
              <input
                onChange={(e) => setInput(e.target.value)}
                onClick={() => {
                  if(first === 0){
                    setInput('What if ')
                    setfirst(1)
                  }
                  }}
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1 bg-gray-800 text-white border-gray-900"
                type="text"
                value={input}
                placeholder="What if..."
              />
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-white text-black"
                type="submit"
                disabled={loading}
                onClick={(e) => {
                  e.preventDefault()
                  getAnswer()
                }}
              >
                {loading ? (
<div role="status">
    <svg aria-hidden="true" class="w-3 h-3 mr-2	 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
) : ''}
                Ask
              </button>
            </form>
            <p class="text-xs text-zinc-200 dark:text-zinc-100">
            Prepared by Hrichik M, Aditya S, Sagnik C, and Aritra S.
          </p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
