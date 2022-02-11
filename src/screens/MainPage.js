import { AddIcon, ArrowBackIcon, Avatar, Box, Divider, FlatList, Flex, HStack, IconButton, Input, KeyboardAvoidingView, Text, VStack } from 'native-base';
import React from 'react';
import VectorImage from 'react-native-vector-image';
import Message from '../components/Message';

const MainPage = () => {
    const data = [{
        text: "hello my love!",
        sender: "crockett"
    },
    {
        text: "i love you too!",
        sender: "iro4ka_inc"
    },
    {
        text: "i doing chat application by the way!",
        sender: "crockett"
    },
    {
        text: "wow, i think it's cool!",
        sender: "iro4ka_inc"
    },
    {
        text: "i doing chat application by the way!",
        sender: "crockett"
    },
    {
        text: "wow, i think it's cool!",
        sender: "iro4ka_inc"
    },
    {
        text: "i doing chat application by the way!",
        sender: "crockett"
    },
    {
        text: "wow, i think it's cool!",
        sender: "iro4ka_inc"
    },
    {
        text: "i doing chat application by the way!",
        sender: "crockett"
    },
    {
        text: "wow, i think it's cool!",
        sender: "iro4ka_inc"
    },
    {
        text: "i doing chat application by the way!",
        sender: "crockett"
    },
    {
        text: "wow, i think it's cool!",
        sender: "iro4ka_inc"
    }];

    return (
        <Box m="2" flex={1} safeArea>
            <HStack>
                <IconButton><ArrowBackIcon w="24px" h="24px" /></IconButton>
                <Avatar bg="purple.100" size="md" />
                <VStack pl="10px" pb="16px">
                    <Text fontSize="md" bold>Crockett</Text>
                    <Text fontSize="sm">Online</Text>
                </VStack>
            </HStack>
            <Divider />

            <KeyboardAvoidingView h={{
                base: "400px",
                lg: "auto"
            }} behavior={Platform.OS === "ios" ? "padding" : "height"} h="100%">
                <VStack>
                    <Box h="90%">
                        <FlatList data={data} renderItem={({ item }) => <Message text={item.text} sender={item.sender} />} />
                    </Box>
                    <Box>
                        <HStack>
                            <IconButton><VectorImage source={require('./sticker-emoji.svg')} /></IconButton>
                            <Input placeholder="Write a message..." variant="unstyled" />
                        </HStack>
                    </Box>
                </VStack>
            </KeyboardAvoidingView>
        </Box>
    );
}

export default MainPage;