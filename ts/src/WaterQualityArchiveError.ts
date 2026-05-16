
import { Context } from './Context'


class WaterQualityArchiveError extends Error {

  isWaterQualityArchiveError = true

  sdk = 'WaterQualityArchive'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  WaterQualityArchiveError
}

