
/**
 * for testing pL
 * const promiseTestFunction = function (arg: boolean) {
 *   return new Promise((res, rej) => {
 *     setTimeout(() => {
 *       if (arg) return res(true)
 *       else rej(false)
 *     }, 1000)
 *   })
 * } 
 *
 */



// l : Logger
const l = function (type: string, text: string, data: object) {
  console.log(`⚡️[server]:${type} : ${text} - ${JSON.stringify(data)}`)
  return data
}

//cL : Console Logger
export const cL = function (text: string, data: object) {
  return l("consoleLogger", text, data)
}

//pL : Promise Logger
export const pl = function (f: (arg: any) => Promise<any>, args: any) {
  return new Promise((resolve, reject) => {
    if (JSON.stringify(process.env.DEBUG) == JSON.stringify("true")) {
      l("promiseLogger : Run :", f.name, args)
      return f.apply(null, [args])
        .then(res => resolve(l("promiseLogger : Res", f.name, res)))
        .catch(err => reject(l("promiseLogger : Err", f.name, err)))
    }
    else
      return f.apply(null, [args])
        .then(res => resolve(res))
        .catch(err => reject(err))
  });
}