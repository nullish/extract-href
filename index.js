const csvFilePath='./io/input.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
	let jsOut = []
	for (let i of jsonObj) {
		let hrefs = i.html.match(/(?<=href=").*?(?=")/g);
		if (hrefs) {
			for (href of hrefs) {
				let obj = {
					'linkId': i.linkID,
					'html': href
				}
				jsOut.push(obj);
			}
			
		}
	}
	console.log(jsOut);
})

const csvJson = async() => {
	// Async / await usage
	const jsonArray=await csv().fromFile(csvFilePath);
}