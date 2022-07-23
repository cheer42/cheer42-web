import openapiTS from 'openapi-typescript'
import fs from 'fs'
import {config} from 'dotenv'

async function main(){
  console.log('Importing types...')
  config()
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY)
    throw new Error('SUPABASE_URL or SUPABASE_KEY is not defined in .env')
  const fileContent = await openapiTS(`${process.env.SUPABASE_URL}/rest/v1/?apikey=${process.env.SUPABASE_KEY}`,
    {  })
  try {
    fs.opendirSync('./types')
  }
  catch (e) {
    fs.mkdirSync('./types')
  }
  fs.writeFileSync('./types/supabase.ts', fileContent, { encoding: "utf-8" })
  console.log('Types are imported')
}

main()
