import { CircleCheck } from "lucide-react";

const SkillsCard = ({ imagem, descricao, tecnologias, icon }) => {
    return (
        <article className='card-skills'>
            <div className='descricao-skills'>
                <img className='img-descricao' src={imagem} alt="icone-front"></img>
                <h3 className='titulo-descricao'>{descricao}</h3>
                <div className="skills-container">
                    {tecnologias.map((tecnologia) => (
                        <div className="skills" key={tecnologia}>
                            <CircleCheck color="#50C878" style={{ backgroundColor: 'inherit' }}/>
                            <p className="skill-name">{tecnologia}</p>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    )
}

export default SkillsCard;