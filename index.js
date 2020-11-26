/*

Receive CSV of IDs and HYML snippets.
Return a JSON object of the href values extracted to mutiple elements, labelled with the original unique ID.

*/

const csvFilePath='./io/input.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
	let jsOut = []
	for (let i of jsonObj) {
		let hrefs = i.html.match(/(?<=href=").*?(?=")/g); // match hrefs into an array
		if (hrefs) {
			for (href of hrefs) {
				// add matched hrefs to a JS object, as a key value pair, reataining original unique ID
				let obj = {
					'linkId': i.linkID,
					'html': href
				}
				jsOut.push(obj); // Build array of all matches
			}

		}
	}
	console.log(jsOut);
})

const csvJson = async() => {
	// Async / await usage
	const jsonArray=await csv().fromFile(csvFilePath);
}