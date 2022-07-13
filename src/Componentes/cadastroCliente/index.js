import "./stylesCliente.css"
import 'bootstrap/dist/css/bootstrap.min.css';



const Cadastro = ({adicionarCliente, nome, setNome, telefone, setTelefone, cpf, setCpf, dtnascimento, setDtnascimento,
    email, setEmail, senha, setSenha, cep, setCep}) => {
    return(
        <>
        <div className="contCli container card field">
            <form>
            <div className=" row">
                <div className="col infoP"> 
                    <input type="text" placeholder="Nome " value={nome} onChange={(e) => setNome(e.target.value)}/>
                    <input type="text" placeholder="CPF" required onChange={(e) => setCpf(e.target.value)} />
                    <input type="text" placeholder="Data Nascimento " required onChange={(e) => setDtnascimento(e.target.value)}/>
                    <input type="text" placeholder="Telefone " required onChange={(e) => setTelefone(e.target.value)}/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input type="text" placeholder="CEP " required onChange={(e) => setCep(e.target.value)} />
                    <input type="text" placeholder="Cidade" required />
                    <input type="text" placeholder="Complemento" required />
                </div>
                <div className="col">
                    <input type="text" placeholder="UF" required />
                    <input type="text" placeholder="Bairro" required />
                    <input type="text" width="40" placeholder="Nº" required />      
                </div>
           

                </div>
                <div className="row">
                <div className="col teste">
                    <input type="email" placeholder="Seu melhor @email " required onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Senha" required onChange={(e) => setSenha(e.target.value)} />
                    <input type="text" placeholder="Repita sua senha" required />
                <div/>
            </div>
             <button type="button" className="btnCadastrar mt-4" onClick={adicionarCliente}>Cadastrar</button>
            </div>
            </form>
        </div>
    </>
    );
}

export default Cadastro;