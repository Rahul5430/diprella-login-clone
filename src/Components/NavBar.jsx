import { Box, IconButton, Image, Spacer, Stack, Tooltip, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

import logoImage from '../Assets/diprella_logo.svg';
import whiteLogo from '../Assets/white_logo.svg';

const Logo = () => {
    const logo = useColorModeValue(logoImage, whiteLogo);

    return (
        <Box>
            <Image 
                className="darkLogo"
                alt="logo"
                src={logo}
                htmlHeight="45px"
                htmlWidth="140px"
                style={{ padding: 10 }}
            />
            <Image 
                className="whiteLogo"
                alt="logo"
                src={whiteLogo}
                htmlHeight="45px"
                htmlWidth="140px"
                style={{ padding: 10, display: 'none' }}
            />
        </Box>
    )
};

const ColorModeButton = ({ mr }) => {
    const { toggleColorMode } = useColorMode();
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);
    const nextMode = useColorModeValue("dark", "light");

    return (
        <Tooltip
            label={`Toggle ${nextMode} mode`}
            aria-label={`Toggle ${nextMode} mode`}
        >
            <IconButton 
                size="md"
                fontSize="lg"
                aria-label={`Toggle ${nextMode} mode`}
                variant="ghost"
                color="current"
                onClick={toggleColorMode}
                icon={<SwitchIcon />}
                style={{ marginRight: mr }}
            />
        </Tooltip>
    );
};

const NavBar = () => {
    return (
        <Stack
            as="header"
            w="100%"
            direction={["row", "row", "row", "row"]}
            alignItems="center"
            justifyContent="center"
            position="fixed"
            zIndex="200"
        >
            <Logo />
            <Spacer />
            <ColorModeButton mr="12px" />
        </Stack>
    );
};

export default NavBar;