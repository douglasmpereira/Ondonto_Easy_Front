import "./stylesCliente.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';



const Cadastro = ({adicionarCliente, nome, setNome, telefone, setTelefone, cpf, setCpf, dtnascimento, setDtnascimento,
    email, setEmail, senha, setSenha, cep, setCep}) => {

        const {register, handleSubmit, setValue, setFocus} = useForm();

        const onSubmit = (e) => {
          console.log(e);
        }
      
        const checkCEP = (e) => {
          const cep = e.target.value.replace(/\D/g, '');
          console.log(cep);
          fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            console.log(data);
            // register({ name: 'address', value: data.logradouro });
            setValue('address', data.logradouro);
            setValue('neighborhood', data.bairro);
            setValue('city', data.localidade);
            setValue('uf', data.uf);
            setFocus('addressNumber');
          });
        }
      
    return(
        <>
        <div className="contCli container card field">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" row">
                <div className="col infoP"> 
                    <input type="text" placeholder="Nome " required value={nome} onChange={(e) => setNome(e.target.value)}/>
                    <input type="text" placeholder="CPF" required value={cpf} onChange={(e) => setCpf(e.target.value)} />
                    <input type="text" placeholder="Data Nascimento " required value={dtnascimento} onChange={(e) => setDtnascimento(e.target.value)}/>
                    <input type="text" placeholder="Telefone " required value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <input type="text" placeholder="CEP " value={cep} {...register("cep") } onBlur={checkCEP} required onChange={(e) => setCep(e.target.value)} />
                    <input type="text" placeholder="Cidade" disabled {...register("city" )}  />
                    <input type="text" placeholder="Rua" disabled {...register("address" )}  />
                </div>
                <div className="col-md-6">
                    <input type="text" placeholder="UF" disabled {...register("uf" )}  />
                    <input type="text" placeholder="Bairro" disabled {...register("neighborhood" )} />
                    <input type="text" width="40" placeholder="Nº" required />      
                </div>
           

                </div>
                <div className="row">
                <div className="col teste">
                    <input type="email" placeholder="Seu melhor @email " required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Senha" required value={senha} onChange={(e) => setSenha(e.target.value)} />
                    <input type="password" placeholder="Repita sua senha" required />
                <div/>
               
            </div>
             <button type="button" className="btnCadastrar mt-5 mb-4" onClick={adicionarCliente}>Cadastrar</button>
            </div>
            </form>
        </div>
    </>
    );
}

export default Cadastro;