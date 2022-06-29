import { NumbersInformations } from "./numbersInformations/Numberinformations";

import Banner from '../../assets/banner.png'

import {Container, Content} from './styles'

interface itemProps {
    id: number;
    name: string;
    numbers: string;
}

export default function AboutPage() {
    return (
        <Container>
            <Content>
                <div className="numbersContent"> 
                    {NumbersInformations.map((item: itemProps)  => {
                        return (
                            <div key={item.id} className="numbers">
                                <span>
                                <strong>
                                {item.numbers}
                                </strong>
                                <br/>
                                {item.name}
                                </span>
                            </div>
                        )
                    })}
                </div>

                <div className="informations">
                    <div className="content">
                        <div className="informationsContent">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <span>potenti diam</span> et cras odio   viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.   
                            </p>

                            <a href="#">
                            Lorem ipsum
                            </a>
                        </div>
                        <div className="informationsContent">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <span>potenti diam</span> et cras odio   viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.   
                            </p>

                            <a href="#">
                            Lorem ipsum
                            </a>
                        </div>
                    </div>
                    <img src={Banner} alt='banner' className="banner"/>
                </div>
                  
            </Content>
        </Container>
    )
}