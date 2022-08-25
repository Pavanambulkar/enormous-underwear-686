import {
  Container,
  Text,
  Img,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,

  
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Stack
      
        direction={["column", "row"]}
        spacing="74px"
        marginTop="10px"
        border="1px solid grey"
        paddingLeft="10px"
        alignItems="center"
        height="60px"
      >
        <Link to="/solution">
        
          <Text fontSize={{ base: '24px', md: '40px', lg: '46px' }}>SendinBlue</Text>
        </Link>
        <Link to="/solution">
        <Menu>
         <MenuButton as={Button} >
         Solution
  </MenuButton>
  <MenuList>
    <MenuItem> <Link to='/whysendinblue'>Why SendinBlue?</Link> </MenuItem>
    <MenuItem>EnterPrise</MenuItem>
    
  </MenuList>
         </Menu>
          {/* <Text fontSize="xl"></Text> */}
        </Link>
        <Link to="/pricing">
         
          <Text fontSize={{ base: '16px', md: '20px', lg: '20px' }}>Pricing</Text>
        </Link>
        <Link to="/features">
          <Menu>
  <MenuButton as={Button} fontSize={{ base: '26px', md: '30px', lg: '20px' }} >
    Features
  </MenuButton>
  <MenuList>
    <MenuItem>Email Marketing</MenuItem>
    <MenuItem>Email Api</MenuItem>
    <MenuItem>Sms Marketing</MenuItem>
    <MenuItem>Chat</MenuItem>
    <MenuItem>Inbox</MenuItem>
  </MenuList>
</Menu> 
          {/* <Text fontSize="xl">Features</Text> */}
        </Link>
        <Link to="/resources">
            <Menu>
        <MenuButton as={Button} fontSize={{ base: '26px', md: '30px', lg: '20px' }} >
    Resources
  </MenuButton>
  <MenuList>
    <MenuItem>Help Center</MenuItem>
    <MenuItem>Api Docs</MenuItem>
    <MenuItem>Sendinblue Acadamy</MenuItem>
    <MenuItem>Product Updates</MenuItem>
    <MenuItem>Service Lab</MenuItem>
  </MenuList>
</Menu> 
          {/* <Text fontSize="xl">Resources</Text> */}
        </Link>
        <Link to="/blog">
         
          <Text fontSize={{ base: '16px', md: '20px', lg: '20px' }}>Blog</Text>
        </Link>
        <Link to="/login">
         
          <Text fontSize={{ base: '16px', md: '20px', lg: '20px' }}>Login</Text>
        </Link>
        <Link to="/signup">
            <Menu>

           
        <MenuButton as={Button} fontSize={{ base: '26px', md: '30px', lg: '20px' }} >
        SignUp
  </MenuButton>
  </Menu>
          {/* <Text fontSize="xl"></Text> */}
        </Link>
      </Stack>
    </>
  );
};

export default Navbar;



{/* <Menu>
  <MenuButton as={Button} >
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu> */}