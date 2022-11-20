const input = '<ItemContainer><ItemProductNameContainer><ItemProductNameContainerLeft><ItemProductImage></ItemProductImage></ItemProductNameContainerLeft><ItemProductNameContainerRight><ItemProductName>Coach</ItemProductName><ItemProductDescription>LeatherCoachBag</ItemProductDescription></ItemProductNameContainerRight></ItemProductNameContainer><ItemPriceContainer></ItemPriceContainer><ItemQtyContainer></ItemQtyContainer><ItemSubtotalContainer></ItemSubtotalContainer>';
const regex = /<[A-Za-z].*?>/g
let res = input.match(regex)
res = res.map(item => `const ${item.replace('<', '').replace('>', '')} = styled.div\`\``);
res.forEach(tag => console.log(tag))
