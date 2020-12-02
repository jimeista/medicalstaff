import React, {useState} from "react";
import {MedicalStaffChart} from "./MedicalStaffChart";
import 'chartjs-plugin-datalabels'

import {

    TabTwoPData,
    TabTwoPOption,
    age,
    name,
    types,
    MTFirstChartOption,
    MTFirstChartData,
    MTFirstChartData2,
    personalOption1,
    personalOption2,
    personalData1,
    personalData2

} from "./ChartOption";



import CheckBoxMenu from "./CheckBoxMenu";

import {ReactComponent as IconChart} from "../img/bar-chart.svg";
import {ReactComponent as IconChart2} from "../img/info_diagram.svg";
import {ReactComponent as IconChart3} from "../img/chart_r.svg";
import {ReactComponent as IconChart4} from "../img/chart_lite.svg";


const MedicalStaffBlock = () => {


    const [ActiveChart1, setActiveChart1] = useState(true);
    const [ActiveChart2, setActiveChart2] = useState(true);
    const [ActiveChart3, setActiveChart3] = useState(true);
    const [ActiveChart4, setActiveChart4] = useState(true);
    const [ActiveChart5, setActiveChart5] = useState(true);
    const [ActiveChart, setActiveChart] = useState(true);
    const [ActiveDiagram, setActiveDiagram] = useState(true);
    const [ActiveBar, setActiveBar] = useState(true);

/*    const [active, setActive] = useState('BarOne')*/


    return (
        <div className="MedicalStaff_main">
            <div className="MedicalStaff_wrapper">
                <div className="MedicalStaff_title_wrap">
                    <div className='MedicalStaff_title_block'>
                        ПЕРСОНАЛ
                    </div>

                    <div className="MedicalStaff_filter_btn">
                        <div
                            title={' Вертикальная диаграмма 1'}
                            className={`MedicalStaff_filter_btn_icon ${ActiveChart1 ? "active" : ""}`}
                            onClick={async () => {setActiveChart1(!ActiveChart1);}}
                        >
                            <IconChart/>
                        </div>

                        <div
                            title={'Кольцевая диаграмма'}
                            className={`MedicalStaff_filter_btn_icon ${
                                ActiveChart2 ? "active" : ""
                            }`}
                            onClick={async () => {
                                setActiveChart2(!ActiveChart2);
                            }}
                        >
                            <IconChart3/>
                        </div>
                        <div
                            title={'Вертикальная диаграмма 2'}
                            className={`MedicalStaff_filter_btn_icon ${
                                ActiveChart3 ? "active" : ""
                            }`}
                            onClick={async () => {
                                setActiveChart3(!ActiveChart3);
                            }}
                        >
                            <IconChart/>
                        </div>
                        <div
                            title={'Горизонтальная диаграмма'}
                            className={`MedicalStaff_filter_btn_icon ${
                                ActiveChart4 ? "active" : ""
                            }`}
                            onClick={async () => {
                                setActiveChart4(!ActiveChart4);
                            }}
                        >
                            <IconChart4/>
                        </div>
                    </div>
                </div>
                <div className={`MedicalStaff_Tab_One_Style btn_action ${ActiveChart1 ? "first_on" : "first_off"} ${ActiveChart2 ? "second_on" : "second_off"} ${ActiveChart3 ? "third_on" : "third_off"} ${ActiveChart4 ? "fourth_on" : "fourth_off"}`}>
                    <div className="MedicalStaff_filter">
                        <div className="MedicalStaff_filter_filter">
                            <div className="MedicalStaff_filter_item ">
                                <CheckBoxMenu titleBtn={"Мед. организация"} checkBox={name} search={true}/>
                            </div>
                            <div className="MedicalStaff_filter_item">
                                <CheckBoxMenu titleBtn={"Возраст"} checkBox={age}/>
                            </div>

                            <div className="MedicalStaff_filter_item">
                                <CheckBoxMenu
                                    titleBtn={"Пол"}
                                    checkBox={types}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={`MedicalStaff_body_wrapper `}>
                        <div className="MedicalStaff_body_wrap first_block">
                            <div className="MedicalStaff_body">
                                <div className='MedicalStaff_body_graph HorizontalBar_graph_one'>
                                    <span>Кол-во мед. персонала в ФБ</span>
                                    <div className='MedicalStaff_body_graph_item '><MedicalStaffChart typeChart='HorizontalBar' dataSet={MTFirstChartData}
                                                                                                      option={MTFirstChartOption}/></div>
                                </div>

                            </div>
                        </div>
                        <div className="MedicalStaff_body_wrap first_block">
                            <div className="MedicalStaff_body">
                                <div className='MedicalStaff_body_graph HorizontalBar_graph_one'>
                                    <span>Кол-во мед. персонала по должностям</span>
                                    <div className='MedicalStaff_body_graph_item '><MedicalStaffChart typeChart='HorizontalBar' dataSet={MTFirstChartData2}
                                                                                                     option={MTFirstChartOption}/></div>
                                </div>
                            </div>
                        </div>
                        <div className="MedicalStaff_body_wrap second_block">
                            <div className="MedicalStaff_body">
                                <div className='MedicalStaff_body_graph Doughnut_graph_one'>
                                    <span>Вид мед. персонала</span>

                                    {/*   <div className='MedicalStaff_body_graph_item'><MedicalStaffChart typeChart='HorizontalBar' dataSet={firstChartData}
                                                                                                     option={firstChartOption}/></div>*/}
                                    <div className='MedicalStaff_body_graph_item '>

                                        <MedicalStaffChart typeChart='Doughnut' dataSet={personalData1} option={personalOption1}/>

                                    </div>

                                </div>


                            </div>
                        </div>
                        <div className="MedicalStaff_body_wrap second_block">
                            <div className="MedicalStaff_body">

                                <div className='MedicalStaff_body_graph Doughnut_graph_one'>
                                    <span>Форма оказываемой мед. помощи</span>

                                    {/*   <div className='MedicalStaff_body_graph_item'><MedicalStaffChart typeChart='HorizontalBar' dataSet={firstChartData}
                                                                                                     option={firstChartOption}/></div>*/}
                                    <div className='MedicalStaff_body_graph_item '>

                                        <MedicalStaffChart typeChart='Doughnut' dataSet={personalData2} option={personalOption2}/>

                                    </div>

                                </div>


                            </div>
                        </div>
                        <div className="MedicalStaff_body_wrap second_block">
                            <div className="MedicalStaff_body">

                                <div className='MedicalStaff_body_graph HorizontalBar_graph_two'>
                                    <span>Кол-во медецинского персонала по возрасту и полу</span>
                                    <div className='MedicalStaff_body_graph_item '><MedicalStaffChart typeChart='Bar' dataSet={TabTwoPData}
                                                                                                      option={TabTwoPOption}/></div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                </div>
        </div>
    );
};

export default MedicalStaffBlock;
