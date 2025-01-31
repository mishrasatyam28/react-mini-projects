import useFetch from "."


export default function UsefetchHookTest() {
    const { data, error, pending } = useFetch('https://dummyjson.com/products?limit=100', {})
    
    console.log(error, data, pending)
    return (
        <div className="">
            <h1>Use Fetch Hook</h1>
            {
                error ? <h3>{error}</h3> : null
            }
            {
                pending ? <h3>Pending ! Please wait</h3> : null
            }
            {
                data && data.products && data.products.length ? data.products.map(productItem =>
                    <p key={productItem.key}>{productItem.title}</p>

                ) : null
            }
        </div>
    )
}