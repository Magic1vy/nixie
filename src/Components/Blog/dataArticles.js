import pictureOne from '../../assets/blog/DSC_6439.jpg';
import pictureTwo from '../../assets/blog/6-01.jpeg';
import pictureThree from '../../assets/blog/DSC_8844.jpg';
import pictureFour from '../../assets/portfolio/maternity/DSC_8674-1.jpg';

import pictureOneMobile from '../../assets/blog/DSC_4153-1.jpg';
import pictureTwoMobile from '../../assets/blog/107-01.jpeg';
import pictureThreeMobile from '../../assets/blog/DSC3134.jpeg';
import pictureFourMobile from '../../assets/portfolio/maternity/DSC_5568-2.jpg';

import BlogPreparationComponent from './BlogPreparationComponent';
import BlogChecklistComponent from './BlogChecklistComponent';
import BlogChildrenPhotoshoot from './BlogChildrenPhotoshoot';
import BlogPregnancyPhotoshoot from './BlogPregnancyPhotoshoot';

const dataArticles = [
    {
        id: 1,
        image: pictureOne,
        imageMobile:pictureOneMobile,
        title: "How important is preparation?",
        content:<BlogPreparationComponent/>,
        published: "July 10, 2023"
    },
    {
        id: 2,
        image: pictureTwo,
        imageMobile:pictureTwoMobile,
        title: "The Photo Session Preparation Checklist",
        content: <BlogChecklistComponent />,
        published: "July 10, 2023"
    },
    {
        id: 3,
        image: pictureThree,
        imageMobile:pictureThreeMobile,
        title: "Children's Photoshoot",
        content: <BlogChildrenPhotoshoot />,
        published: "July 10, 2023"
    },
    {
        id: 4,
        image: pictureFour,
        imageMobile:pictureFourMobile,
        title: "Prepare To Maternity Photoshoot",
        content: <BlogPregnancyPhotoshoot />,
        published: "July 14, 2023"
    }
]

export default dataArticles;