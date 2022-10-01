const React = require('react')
const Deafult = require('./layouts/default')

function Show ({bread}) {
// console.log(bread.name)
return (
    <Deafult>
        <h3>{bread.name}</h3>
        <p>
            and it
            {
                bread.hasGluten
                    ? <span> does </span>
                    : <span> does NOT </span>
            }
            have gluten.
        </p>
        <img src={bread.image} alt={bread.name} />
        <li><a href='/breads'>Go home</a></li>
</Deafult>
)
}

module.exports = Show