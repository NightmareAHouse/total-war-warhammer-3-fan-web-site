import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './app/App';
import {RecoilRoot} from 'recoil';
import {ChakraProvider} from '@chakra-ui/react';

ReactDOM.render(
    <RecoilRoot>
        <ChakraProvider>
            <App/>
        </ChakraProvider>
    </RecoilRoot>,
    document.getElementById('root')
);
