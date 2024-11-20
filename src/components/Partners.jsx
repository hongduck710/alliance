import partners from "../partners.json";

const Partners = () => {



    return (
        
        <section className="w1400 partners">
            <h2>NOS PARTENAIRES</h2>
            <h1>알리앙스프랑세즈는 여러기관과 협력하고 있습니다.</h1>
            <ul>
                {partners.map((partner, idx)=>(
          <li key={idx}><img src={partner.url} alt={partner.title} /></li>
                ))}
            </ul>
        </section>
    );
};

export default Partners;