// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { apiResolver } from "next/dist/next-server/server/api-utils"

export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}