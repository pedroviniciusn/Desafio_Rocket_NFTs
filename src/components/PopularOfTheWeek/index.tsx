import { PopularAstronaut } from "./popular";

import { AstronautCards, Cards, Container, Content } from "./styles";
import ArrowWhite from '../../assets/arrow-white.svg'
import { ReactSVGElement } from "react";

interface itemProps {
    id: number;
    astronaut: string;
    name: string;
    price: string;
    img: string;
}

export default function PopularOfTheWeek() {
    return (
        <Container>
            <Content>
                <div className="title">
                    <h1><span>Populares</span> da semana</h1>
                </div>

                <span className="line"></span>
                <AstronautCards>
                        {PopularAstronaut.map((item: itemProps) => {
                            return (
                                <Cards>
                                    <div className="astronautNumber" key={item.id}>
                                        <h3>{item.astronaut}</h3>
                                        <img src={ArrowWhite}/>
                                    </div>
                                    <div className="nameAndPrice">
                                        <span className="name">{item.name}</span>
                                        <span className="price">{item.price}</span>
                                    </div>
                                    <img src={item.img} alt="Mayk Brito"/>
                                </Cards>
                            )    
                        })}
                </AstronautCards>
            </Content>
        </Container>
    )
}