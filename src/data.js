import { AiFillHome, AiOutlineHome } from "react-icons/ai"
import { MdOutlineHomeWork, MdOutlineCabin, MdOutlineHouse, MdHouseSiding, MdPeople } from "react-icons/md"
import { BiHomeSmile } from "react-icons/bi"
import { SlCup } from "react-icons/sl"
import { RiSailboatLine } from "react-icons/ri"
import { TbBus } from "react-icons/tb"
import { BsFillDoorOpenFill } from "react-icons/bs"

export const StructureData = [
    {
        id: 1,
        name: "House",
        icon: <AiOutlineHome />
    },
    {
        id: 2,
        name: "Apartment",
        icon: <MdOutlineHomeWork />
    },
    {
        id: 3,
        name: "Barn",
        icon: <BiHomeSmile />
    },
    {
        id: 4,
        name: "Bed & breakfast",
        icon: <SlCup />
    },
    {
        id: 5,
        name: "Boat",
        icon: <RiSailboatLine />
    },
    {
        id: 6,
        name: "Cabin",
        icon: <MdOutlineCabin />
    },
    {
        id: 7,
        name: "Camper/RV",
        icon: <TbBus />
    },
    {
        id: 8,
        name: "Casa Particular",
        icon: <AiOutlineHome />
    },
    {
        id: 9,
        name: "Castle",
        icon: <AiOutlineHome />
    },
    {
        id: 10,
        name: "Cave",
        icon: <MdHouseSiding />
    },
    {
        id: 11,
        name: "Container",
        icon: <AiOutlineHome />
    },
    {
        id: 12,
        name: "Cycladic Home",
        icon: <MdOutlineHouse />
    },
    {
        id: 13,
        name: "Cycladic Home",
        icon: <AiOutlineHome />
    },
    {
        id: 14,
        name: "Hotel",
        icon: <AiOutlineHome />
    },
    {
        id: 15,
        name: "Guest House",
        icon: <AiOutlineHome />
    },
]

export const PrivacyTypeData = [
    {
        id: 1,
        title: "An entire Place",
        text: "Guests have the whole place to themselves.",
        icon: <AiFillHome />,
        selected: false
    },
    {
        id: 2,
        title: "A private room",
        text: "Guests sleep in a private room but some areas may be shared with you or others.",
        icon: <BsFillDoorOpenFill />,
        selected: false
    },
    {
        id: 3,
        title: "A shared room",
        text: "Guests sleep in a room or common area that may be shared with you or others.",
        icon: <MdPeople />,
        selected: false
    },
]

export const floorData = [
    {
        id: 1,
        name: "Guests",
        value: 0,
        divider: true
    },
    {
        id: 2,
        name: "Bedrooms",
        value: 0,
        divider: true
    },
    {
        id: 3,
        name: "Beds",
        value: 0,
        divider: true
    },
    {
        id: 4,
        name: "Bathroom",
        value: 0,
        divider: false
    },

]

export const visibilityData = [
    {
        id: 1,
        title: "Any Airbnb guest",
        text: "Get reservation fasters when you welcome anyone from Airbnb community",
        checked: true
    },
    {
        id: 2,
        title: "An experienced guest",
        text: "For your first guest, welcome someone with a good track record on Airbnb who can offer tips for how to be a great Host",
        checked: false
    },
]