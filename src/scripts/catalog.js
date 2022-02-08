export const catalog = (harvest) => {
    
var seedHTML = ""

for (const seed of harvest) {

    seedHTML += `<section> ${seed.type}</section>`
}

return seedHTML
}