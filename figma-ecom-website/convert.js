const input = '<Container><HeroContainer><HeroImage></HeroImage><HeroTextContainer><HeroTextHeading></HeroTextHeading><HeroText></HeroText></HeroTextContainer></HeroContainer><Container1><Container1Heading></Container1Heading><Container1Text></Container1Text></Container1><Container2><Container2Left><Container2Heading></Container2Heading><Container2Text></Container2Text></Container2Left><Container2Right></Container2Right></Container2><Container3><Container3Left></Container3Left><Container3Right><Container3RightHeading></Container3RightHeading><Container3RightText></Container3RightText></Container3Right></Container3><Container4><Container4Left><Container4LeftHeading></Container4LeftHeading><Container4LeftText></Container4LeftText></Container4Left><Container4Right></Container4Right></Container4></Container>';
const regex = /<[A-Za-z].*?>/g
let res = input.match(regex)
res = res.map(item => `const ${item.replace('<', '').replace('>', '')} = styled.div\`\``);
res.forEach(tag => console.log(tag))
