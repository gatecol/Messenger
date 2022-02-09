import { AddIcon, ArrowBackIcon, Avatar, Box, Divider, HStack, IconButton, Text, VStack } from 'native-base';
import React from 'react';
import VectorImage from 'react-native-vector-image';

const MainPage = () => {
    return (
        <Box p="8px">
            <HStack>
                <IconButton><ArrowBackIcon w="24px" h="24px"/></IconButton>
                <Avatar bg="purple.100" size="md"/>
                <VStack pl="10px" pb="16px">
                    <Text fontSize="md" bold>Crockett</Text>
                    <Text fontSize="sm">Online</Text>
                </VStack>
            </HStack>
            <Divider/>
            <HStack>
                <IconButton><VectorImage source={require('./sticker-emoji.svg')}/></IconButton>
            </HStack>
        </Box>
    );
}

export default MainPage;