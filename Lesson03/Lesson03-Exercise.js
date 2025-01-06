//3a
const b = 'My name is: '

//3b
const a = 'Santino'

//3c
'My name is: '  + 'Santino'

//3d
'Total cost: $' + (5 + 3)

//3e
`Total cost: $${5+3}`

//3f
alert(`Total cost: $${5+3}`)

//3g
'Total Cost: $' + ((599 + 295) / 100)

//3h
`Total Cost: $${(599 + 295) / 100}`

//3i
alert(`Total Cost: $${(599 + 295) / 100}`)

//3j
alert(`Total Cost: $${(599 + 295) / 100}\nThank you, come again!`)
//or 
alert(`Total Cost: $${(599 + 295) / 100}
Thank you, come again!`)


//3k-3n
`Items(${2+2}): $${((2*2095) + (2*799))/100}
Shipping & handling: $${(499 * 2)/100}
Total before tax: $${(2*2095)/100 + (2*799)/100 + (499 * 2)/100}
Estimated tax (10%): ${Math.round( ( (2*2095) + (2*799) + (499 * 2) )* 0.1)/100}`
