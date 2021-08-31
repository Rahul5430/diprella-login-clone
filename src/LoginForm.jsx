import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Heading, Text, Stack, useColorModeValue } from "@chakra-ui/react";
import Login from "./Components/Form";
import LinkIconBar from "./Components/LinkIconBar";

import links from "./Data/footerLinks";
import { colors } from './Theme';

const SignUp = ({ bg }) => {
    return (
        <Stack
            className="form-container sign-up-container"
            bg={bg}
            opacity={0}
            left="0"
            width="50%"
            zIndex={1}
            height="100%"
            position="absolute"
            top="0"
            transition="all 0.6s ease-in-out;"
        >
            <Stack
                display="flex !important"
                alignItems="center !important"
                justifyContent="center !important"
                padding="0 50px"
                height="100%"
                textAlign="center"
            >
                <Heading
                    as="h1"
                    style={{ fontFamily: '"GothamPro Medium", serif' }}
                >
                    Create Free Account
                </Heading>
                <Text
                    maxW="100%"
                    color="#555a59"
                    style={{ fontFamily: '"GothamPro", serif', marginBottom: '16px' }}
                    fontSize="1.125rem"
                    textAlign="center"
                    letterSpacing={0}
                    // mb="16px"
                >
                    Sign up using social networks
                </Text>
                <LinkIconBar links={links} />
                <Formik
                    initialValues={{ 
                        email: '',
                        password: '',
                    }}
                    validationSchema={Yup.object().shape({
                        name: Yup.string()
                            .required('Name is required'),
                        surname: Yup.string()
                            .required('Surname is required'),
                        email: Yup.string()
                            .email('Email is invalid')
                            .required('Email is required'),
                        password: Yup.string()
                            .min(8, 'Password must be at least 8 characters')
                            .required('Password is required')
                    })}
                    onSubmit={fields => {
                        alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                    }}
                >
                    {({ errors, status, touched }) => (
                        <Form
                            style={{ alignItems: "center" }}
                        >
                            <Stack></Stack>
                            <Stack as='fieldset'>
                                <Stack as='fieldset'>
                                    <Field type="text" name="name" placeholder="Name" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                    <ErrorMessage name="name" component="div" className="invalid-feedback" />
                                </Stack>
                                <Stack as='fieldset'>
                                    <Field type="text" name="surname" placeholder="Surname" className={'form-control' + (errors.surname && touched.surname ? ' is-invalid' : '')} />
                                    <ErrorMessage name="surname" component="div" className="invalid-feedback" />
                                </Stack>
                                <Stack as='fieldset'>
                                    <Field type="text" name="email" placeholder="Email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                </Stack>
                                <Stack as='fieldset'>
                                    <Field type="password" name="password" placeholder="Password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                </Stack>
                            </Stack>
                            <Button
                                type="submit"
                                w={235}
                                h={54}
                                backgroundColor="#28b498"
                                borderRadius={30}
                                outline={0}
                                border="none"
                                justifyContent="center"
                                color="#fff"
                                alignItems="center"
                                fontFamily="'GothamPro Medium', serif"
                                fontSize="0.875rem"
                                lineHeight={16}
                                textAlign="center"
                                margin="32px 0"
                            >
                                Sign Up
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Stack>
        </Stack>
    );
};

const SignIn = ({ bg }) => {
    return (
        <Stack
            className="form-container sign-in-container"
            bg={bg}
            left="0"
            width="50%"
            height="100vh"
            zIndex={2}
            position="absolute"
            top="0"
            transition="all 0.6s ease-in-out;"
            marginInlineStart="0 !important"
        >
            <Stack
                display="flex !important"
                alignItems="center !important"
                justifyContent="center !important"
                padding="0 50px"
                height="100%"
                textAlign="center"
            >
                <Heading
                    as="h1"
                    style={{ fontFamily: '"GothamPro Medium", serif' }}
                >
                    Login to Your Account
                </Heading>
                <Text
                    maxW="100%"
                    color="#555a59"
                    style={{ fontFamily: '"GothamPro", serif', marginBottom: '16px' }}
                    fontSize="1.125rem"
                    textAlign="center"
                    letterSpacing={0}
                    // mb="16px"
                >
                    Login using social networks
                </Text>
                <LinkIconBar links={links} />
                <Login />
            </Stack>
        </Stack>
    );
};

const Overlay = () => {
    const handleRightOnClick = () => {
        const container = document.getElementById('container');

        container.classList.add('right-panel-active');
    };

    const handleLeftOnClick = () => {
        const container = document.getElementById('container');

        container.classList.remove('right-panel-active');
    };

    return (
        <Stack
            className="overlay-container"
            as="section"
            left="50%"
            width="50%"
            height="100%"
            position="absolute"
            overflow="hidden"
            transition="all 0.6s ease-in-out;"
            zIndex={100}
            backgroundImage="linear-gradient(253deg, #3ba5b4, #38ba8a 100%)"
            marginInlineStart="0 !important"
        >
            <Stack
                className="overlay"
                position="relative"
                left="-100%"
                width="200%"
                height="100%"
                background="0 0"
                transform="translateX(0)"
                transition="all 0.6s ease-in-out;"
            >
                <Stack
                    className="overlay-left"
                    transform="translateX(-20%)"
                    position="absolute"
                    display="flex !important"
                    alignItems="center"
                    justifyContent="center"
                    padding="0 40px"
                    textAlign="center"
                    height="100%"
                    top={0}
                    width="50%"
                    transition="all 0.6s ease-in-out;"
                >
                    <Heading
                        as="h1"
                        style={{
                            fontSize: "2.375rem",
                            fontFamily: '"GothamPro Medium", serif'
                        }}
                        maxWidth="100%"
                        lineHeight="48px"
                        margin="0 0 32px"
                        textAlign="center"
                        color="#fff"
                    >
                        One Of Us?
                    </Heading>
                    <Text
                        fontSize="1.125rem"
                        maxWidth="320px"
                        style={{ fontFamily: '"GothamPro", serif' }}
                        lineHeight="36px"
                        textAlign="center"
                        marginBottom="32px !important"
                        color="#fff"
                    >
                        If you already have an account, just sign in. We've missed you!
                    </Text>
                    <Button
                        w={223}
                        h={54}
                        backgroundColor="#fff"
                        borderRadius={30}
                        outline={0}
                        border="none"
                        justifyContent="center"
                        color="#1a1e1d"
                        alignItems="center"
                        fontFamily="'GothamPro Medium', serif"
                        fontSize="0.875rem"
                        lineHeight={16}
                        textAlign="center"
                        margin="32px 0"
                        onClick={handleLeftOnClick}
                    >
                        Sign In
                    </Button>
                </Stack>
                <Stack
                    className="overlay-right"
                    right="0"
                    transform="translateX(0)"
                    position="absolute"
                    display="flex !important"
                    alignItems="center"
                    justifyContent="center"
                    padding="0 40px"
                    textAlign="center"
                    height="100%"
                    top={0}
                    width="50%"
                    transition="all 0.6s ease-in-out;"
                >
                    <Heading
                        as="h1"
                        style={{
                            fontSize: "2.375rem",
                            fontFamily: '"GothamPro Medium", serif'
                        }}
                        maxWidth="100%"
                        lineHeight="48px"
                        margin="0 0 32px"
                        textAlign="center"
                        color="#fff"
                    >
                        New Here?
                    </Heading>
                    <Text
                        fontSize="1.125rem"
                        maxWidth="320px"
                        style={{ fontFamily: '"GothamPro", serif' }}
                        lineHeight="36px"
                        textAlign="center"
                        marginBottom="32px !important"
                        color="#fff"
                    >
                        Sign up and discover a great amount of new opportunities!
                    </Text>
                    <Button
                        w={223}
                        h={54}
                        backgroundColor="#fff"
                        borderRadius={30}
                        outline={0}
                        border="none"
                        justifyContent="center"
                        color="#1a1e1d"
                        alignItems="center"
                        fontFamily="'GothamPro Medium', serif"
                        fontSize="0.875rem"
                        lineHeight={16}
                        textAlign="center"
                        margin="32px 0"
                        onClick={handleRightOnClick}
                    >
                        Sign Up
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
};

const LoginForm = () => {
    const bg = useColorModeValue(colors.bg.light, colors.bg.dark);

    return (
        <Stack
            direction={["column", "row"]}
            className='container'
            id='container'
            // backgroundColor="#fff"
            // borderRadius="10px"
            // boxShadow="0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%)"
            position="relative"
            overflow="hidden"
            // width="768px"
            maxWidth="100%"
            // minHeight="480px"
            width="100vw"
            height="100vh"
        >
            <SignUp bg={bg} />
            <SignIn bg={bg} />
            <Overlay />
        </Stack>
    );
};

export default LoginForm;