import { type Request, type Response } from "express"

const timeoutPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Will wait for 5 seconds")
      resolve(true)
    }, 5000);
  })
}

export async function intro(req: Request, res: Response) {
  res.status(200).json({ message: "This is ai intro route" })
}


export async function getSummary(req: Request, res: Response,) {
  try {
    await timeoutPromise()
    res.status(200).json({ msg: "This is getSummary route" })
  } catch (error) {
    console.log("Error in getSummary route", error)
    res.status(500).json({ msg: "This is getSummary Error" })
  }
}