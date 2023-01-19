import { Box, Flex, Heading, Hide, Image, Show, Text, Tooltip, } from '@chakra-ui/react'
import { Dropbeauty, Drophome, Dropkid, Dropmen, Dropwomen } from './dropdwon/Dropdown';
import { SlUser, SlHeart, SlHandbag } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { FiMenu, FiLogOut, FiLogIn } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import apnidukan from "./apnidukan.png"
import Profile from './dropdwon/Profile';
import Studio from './dropdwon/Studio';
import React, { Dispatch } from 'react'
import "./navbar.css"
import UseToggle from '../../Custom-hooks/UseToggle';
import { useDispatch, useSelector } from 'react-redux';
import UseToastMsg from '../../Custom-hooks/UseToastMsg';
import { logout } from '../../Redux/Auth/Action.auth';
import { RootState } from '../../Redux/store';


interface IProps {
    ToggleSearchBar(): void
}

const menu = [
    { icon: <SlUser />, title: 'Profile', path: '/profile' },
    { icon: <SlHeart />, title: 'Wishlist', path: '/wishlist' },
    { icon: <SlHandbag />, title: 'Cart', path: '/cart' },
]

const Navbar = ({ ToggleSearchBar }: IProps) => {
    const navigate = useNavigate()
    const { Toast } = UseToastMsg();
    const dispatch: Dispatch<any> = useDispatch()
    const { userCredential }: any = useSelector((store: RootState) => store.auth)
    const [isOpen, ToggleMenu]: any = UseToggle(false);

    const Logout = () => {
        dispatch(logout(Toast))
    }

    const LogIn = () => {

    }


    return (
        <Box position={'sticky'} top='0' zIndex={99} bg='whiteAlpha.900' w='100%'>
            <Hide below='md'>
                <Box boxShadow='sm' >
                    <Flex position={'relative'} w={"97%"} align="center" m='auto' h={"75px"} justify="space-between" color={"gray.600"}>
                        <Flex align="center" flex={'2'}>
                            <Link to="/">
                                <Tooltip label='ApniDukaan' aria-label='A tooltip'>
                                    <Image w="80px" src={apnidukan} alt='' />
                                </Tooltip>
                            </Link>
                            <Flex w="35%" justifyContent={"space-between"} >
                                <Box className='nav-link' >
                                    <Link to="shop/men" id="navmen">MEN</Link>
                                    <Box className='mega-menu'>
                                        <Box className='mega-menu-container'> <Dropmen /> </Box>
                                    </Box>
                                </Box>

                                <Box className='nav-link'>
                                    <Link to="shop/women" id="navwomen">WOMEN</Link>
                                    <Box className='mega-menu'>
                                        <Box className='mega-menu-container'><Dropwomen /></Box>
                                    </Box>
                                </Box>

                                <Box className='nav-link'>
                                    <Link to="shop/kids" id="navkid">KIDS</Link>
                                    <Box className='mega-menu'>
                                        <Box className='mega-menu-container'><Dropkid /></Box>
                                    </Box>
                                </Box>

                                <Box className='nav-link'>
                                    <Link to="shop/home" id="navhome">HOME & LIVING</Link>
                                    <Box className='mega-menu'>
                                        <Box className='mega-menu-container'><Drophome /></Box>
                                    </Box>
                                </Box>

                                <Box className='nav-link'>
                                    <Link to="shop/beauty" id="navbeauty">BEAUTY</Link>
                                    <Box className='mega-menu'>
                                        <Box className='mega-menu-container'><Dropbeauty /></Box>
                                    </Box>
                                </Box>

                                <Box className='nav-link-studio'>
                                    <Text cursor={'pointer'} id="navstudio">STUDIO</Text>
                                    <Box className='mega-menu-studio'>
                                        <Box className='mega-menu-container-studio'><Studio /></Box>
                                    </Box>
                                </Box>
                                <i className="fa fa-font-awesome" aria-hidden="true"></i>
                            </Flex>
                        </Flex>


                        <Flex w='100%' flex={'1'} pr='20px' align="center" justify="flex-end" gap={{ base: '5%', sm: '5%', md: '5%', lg: '10%' }} >
                            <Box id="navsearchbox" onClick={ToggleSearchBar}>
                                <Box id='navsearch'>
                                    <BsSearch />
                                </Box>
                            </Box>
                            <Flex flexDir={"column"} justify="center" align={"center"} className='nav-link-profile'>
                                <Link to='/profile' color={"gray.600"}>
                                    <Flex flexDir={"column"} justify="center" align={"center"}>
                                        <SlUser />
                                        <Text fontSize={"12px"} fontWeight="bold">Profile</Text>
                                    </Flex>
                                </Link>
                                <Box className='mega-menu-profile'>
                                    <Box className='mega-menu-container-profile'><Profile /></Box>
                                </Box>
                            </Flex>
                            <Flex color={"gray.600"}>
                                <Link to='/wishlist'>
                                    <Flex flexDir={"column"} justify="center" align={"center"}>
                                        <SlHeart />
                                        <Text fontSize={"12px"} fontWeight="bold">Wishlist</Text>
                                    </Flex>
                                </Link>
                            </Flex>
                            <Flex color={"gray.600"}>
                                <Link to='/cart'>
                                    <Flex flexDir={"column"} justify="center" align={"center"}>
                                        <SlHandbag />
                                        <Text fontSize={"12px"} fontWeight="bold">Bag</Text>
                                    </Flex>
                                </Link>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            </Hide>

            <Show below='md'>
                <Box boxShadow='sm' pos='relative'>
                    <Flex w={"95%"} align="center" m='auto' h={"60px"} justify="space-between" color={"gray.600"}>
                        <Link to='/'>
                            <Image w="60px" src={apnidukan} alt='apnidukan' />
                        </Link>
                        <Box fontSize={'1.7rem'} onClick={ToggleMenu}><FiMenu /></Box>
                        {isOpen && <Box tabIndex={1} pos={'fixed'} top='98px' right={0} minW='150px' w='150px' boxShadow={'md'} zIndex='99' bg='whiteAlpha.800'>
                            <Flex flexDir={"column"}>
                                <Flex justify="flex-start" align={"center"} gap='10px' p='2' color={"gray.600"} onClick={() => {
                                    ToggleSearchBar();
                                    ToggleMenu();
                                }} >
                                    <Text><BsSearch /></Text>
                                    <Text fontWeight="semibold">Search</Text>
                                </Flex>
                                {menu.map((menu, i) => (
                                    <Link key={i} to={menu.path} onClick={ToggleMenu}>
                                        <Flex justify="flex-start" align={"center"} gap='10px' p='2' color={"gray.600"}>
                                            <Text>{menu.icon}</Text>
                                            <Text fontWeight="semibold">{menu.title}</Text>
                                        </Flex>
                                    </Link>
                                ))}
                                {
                                    userCredential?.email ?
                                        <Flex justify="flex-start" align={"center"} gap='10px' p='2' color={"gray.600"} onClick={() => {
                                            Logout();
                                            ToggleMenu();
                                        }}>
                                            <Text><FiLogOut /></Text>
                                            <Text fontWeight="semibold">Logout</Text>
                                        </Flex>
                                        :
                                        <Link to='/login'>
                                            <Flex justify="flex-start" align={"center"} gap='10px' p='2' color={"gray.600"} onClick={ToggleMenu}>
                                                <Text><FiLogIn /></Text>
                                                <Text fontWeight="semibold">Login</Text>
                                            </Flex>
                                        </Link>
                                }
                            </Flex>
                        </Box>}
                    </Flex>
                    <Flex fontWeight={'semibold'} fontSize={'.9em'} justify='space-evenly' py='2' borderTop={'1px'} borderColor='gray.200'>
                        <Link to='/shop/men'>Men</Link>
                        <Link to='/shop/women'>Women</Link>
                        <Link to='/shop/kids'>Kids</Link>
                        <Link to='/shop/home&living'>Home&Living</Link>
                        <Link to='/shop/beauty'>Beauty</Link>
                    </Flex>
                </Box>
            </Show>
        </Box>
    )
}

export default Navbar