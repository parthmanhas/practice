const input = '<Container><OrdersHeadingContainer><OrderHeadingItem>Order Id</OrderHeadingItem><OrderHeadingItem>Date</OrderHeadingItem><OrderHeadingItem>Price</OrderHeadingItem><OrderHeadingItem>Status</OrderHeadingItem></OrdersHeadingContainer><OrderItemContainer><OrderId>#8764573829</OrderId><OrderDate>September 5, 2022</OrderDate><OrderPrice>$216.50</OrderPrice><OrderStatusContainer><OrderStatus>Paid</OrderStatus><Arrow><RiArrowRightSLine /></Arrow></OrderStatusContainer></OrderItemContainer></Container>';
const regex = /<[A-Za-z].*?>/g
let res = input.match(regex)
res = res.map(item => `const ${item.replace('<', '').replace('>', '')} = styled.div\`\``);
res.forEach(tag => console.log(tag))
