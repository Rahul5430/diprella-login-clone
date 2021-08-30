import { Field, Form, Formik } from 'formik';
import { Button, Stack } from '@chakra-ui/react';

const Login = () => {
    return (
        <Formik>
            <Form
                style={{ alignItems: "center" }}
                
            >
                <Stack></Stack>
                <Stack as='fieldset'>
                    <Stack as='fieldset'>
                        <Field type="email" placeholder="Email" />
                    </Stack>
                    <Stack as='fieldset'>
                        <Field type="password" placeholder="Password" />
                    </Stack>
                </Stack>
                <Button
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
                    Sign In
                </Button>
            </Form>
        </Formik>
    );
};

export default Login;