import React from "react"


class Content extends React.Component {
    constructor(props){
         super(props)
         this.state={tenCl:false, elevenCl:false}
    }
    ten_click(e){
        if (!this.state.tenCl){
            e.target.style.color = 'white';
            e.target.style.backgroundColor = 'blue';   
        }else{
            e.target.style.color = 'black';
            e.target.style.backgroundColor = null;   
        }
        this.setState(prevState=>({tenCl:!prevState.tenCl, elevenCl:prevState.elevenCl}))
    };
    eleven_click(e){
        if (!this.state.elevenCl){
            e.target.style.backgroundColor = 'yellow';  
        }else{
            e.target.style.backgroundColor = null;   
        }
        this.setState(prevState=>({tenCl:prevState.tenCl, elevenCl:!prevState.elevenCl}))
    }
    render() {
        return <div className="main-block">
            <p id="bio-block">
                04.07.2002 Чернігів, Чернігівська область <br/>
                <a href="products">Products</a> <br/>
                <br/>
                    2008-2019 Чернігівська Загальноосвітня спеціалізована школа фізико-математичного профілю №12
                    <br/>
                    2019-2023 Національний технічний університет України “КПІ імені Ігоря Сікорського”
            </p>
            <p id="hobby-block">
                Мої хобі:<br/>
                <li>Кулінарія</li>
                <li>Біг</li>
                <li>Програмування</li>
                <li>Тренування в залі</li>
                <li id="line-10" onClick={(e)=>this.ten_click(e)}>Читання</li>
            </p>
            <p id="films-block">
                <span className="line-11" onClick={(e)=>this.eleven_click(e)}>Тепер розглянемо улюблені фільми</span>
                <br/>
                <li>Зелена книга (2018)</li>
                <li>Морский бій (2012)</li>
                <li>Топ Ган: Меверік (2022)</li>
            </p>
            <p id="favorite-city-block">
                    <span className="subtitle">Саме вподобане місто - це рідний Чернігів</span>
                    <br/>
                    Розпочати хотілось б з дивовижного в'їзду в це місто(фото можете побачити знизу).
                    <br/>
                    У місті неймовірна кількість історичних місць:
                    <li>Катерининська церква(1715 рік)</li>
                    <li>Вал(відкрито для туризму з початку XX ст)</li>
                    <li>Борисоглібський собор(початок ХII ст)</li>
                    <li>Чернігівський колегіум(1696 рік)</li>
                    <li>пішохідний міст - який пережив бомбардування при спробі окупації Чернігова(2022)</li>
            </p>
        </div>
    }
}
export default Content;