import React from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img6 from '../../assets/img6.jpg';
import icon1 from '../../assets/icon(1).png';
import icon2 from '../../assets/icon(2).png';
import icon3 from '../../assets/icon(3).png';

const OverOns = () => {
    return (
        <div className='px-5'>
            <h2 className='text-[#11162E] text-5xl mt-10 md:mt-20 my-5 md:text-7xl lg:text-[330px] text-center uppercase'>OVER ONS</h2>
            <div className='max-w-[1920px] md:px-12 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-40 gap-0'>
                    <div>
                        <p>
                            Wij zijn gespecialiseerd in Dak reparaties, -renovaties en -onderhoud. Dak lekkage? Spoedaanvragen? Dan bent u bij ons aan het juiste adres. Onze 24 uursservice zorgt ervoor dat wij u altijd op korte termijn een oplossing kunnen bieden. Wij brengen de verwachtingen van onze klanten in kaart en geven een duurzame passende oplossing voor uw klus. Dit wordt mogelijk gemaakt door onze vakmensen die jarenlang ervaring hebben. De specialisaties zijn o.a. het leveren en aanbrengen van Bitumen, Epdm en pannen daken. Maar ook het vernieuwen van lood en zink.
                            Goed om te weten; Het materiaal dat wij gebruiken behoort tot de A klasse producten, dit zorgt voor een perfect eindresultaat. Het doel is u zo snel en goed mogelijk te helpen. Wij leggen de lat hoog en streven naar het beste eindresultaat. Hiervoor hebben wij uw hulp nodig; transparantie, goede communicatie en duidelijke afspraken. Heeft u vragen of wilt u meer informatie? Wij staan klaar om u verder te helpen. Dakonderhoud GMK uw specialist voor alle klussen in en rondom uw huis.
                        </p>
                        <div className='flex gap-5 md:mt-20 my-10 md:my-0 items-center md:justify-start justify-center'>
                            <img className='w-[100px] md:w-[186px] md:h-[63px]' src={icon1} alt="Image 1" />
                            <img className='w-[50px] md:w-[59px] md:h-[79px]' src={icon2} alt="Image 2" />
                            <img className='w-[80px] md:w-[115px] md:h-[48px]' src={icon3} alt="Image 3" />
                        </div>
                    </div>
                    <div className='grid grid-cols-2'>

                        <img className='w-[400px] h-[150px] object-cover' src={img1} alt="Image 1" />
                        <img className='w-[400px] h-[150px] object-cover' src={img2} alt="Image 2" />
                        <img className='w-[400px] h-[150px] object-cover' src={img3} alt="Image 3" />
                        <img className='w-[400px] h-[150px] object-cover' src={img1} alt="Image 4" />
                        <img className='w-[400px] h-[150px] object-cover' src={img1} alt="Image 5" />
                        <img className='w-[400px] h-[150px] object-cover' src={img6} alt="Image 6" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverOns;
