import { Box, IconButton, Image, Spacer, Stack, Tooltip, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

import logoImage from '../Assets/diprella_logo.svg';
// import logoImage from '../Assets/white_logo.svg';

const Logo = () => (
    <Box>
        <Image 
            alt="logo"
            src={logoImage}
            htmlHeight="45px"
            htmlWidth="140px"
            style={{ padding: 10 }}
        />
    </Box>
);

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