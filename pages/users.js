function Users({data}){
    return(
        <div>
            <header>On Users page</header>
            {JSON.stringify(data)}
        </div>
    );
}

//export async function getServerSideProps(context){
export async function getStaticProps(context){
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    //console.log(data);

    return {
        props: { data }
    }
}

export default Users;