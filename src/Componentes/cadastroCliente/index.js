// import "./styles.css"

const Cadastro = () => {
    return(
        <>
        <div className="container">
            <form className="containerForm">
             
                <input  type="text" placeholder='Nome Completo ' required/>
             
                <input type="text" placeholder='Telefone ex: (22) 12345-6789' required/>
             
                <input type="text" placeholder='Data de nascimento ex: 01/01/2000' required/>
             
                <input type="text" placeholder='Seu melhor @email' required/>
             
                <input className="senha" type="password" placeholder='Digite sua senha' required/>
             
                <input className="senha" type="password" placeholder='Repita sua senha' required/>

                <input type="text" placeholder='Digite seu CEP ex: 28000-000' required/>

                <input type="text" placeholder='Nº da casa'/>

                <input type="text" placeholder='Complemento'/>
                <div>
                    <button type="submit" className="btnCadastrar">Cadastrar</button>
                    
                </div>
            </form>
            
            </div>
        </>
    );
}

export default Cadastro;