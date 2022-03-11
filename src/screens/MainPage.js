import { AddIcon, ArrowBackIcon, Avatar, Box, Divider, FlatList, Flex, HStack, IconButton, Input, KeyboardAvoidingView, Text, VStack } from 'native-base';
import React, { Component } from 'react';
import VectorImage from 'react-native-vector-image';
import Message from '../components/Message';

export default class MainPage extends Component {
    id = 0;

    constructor() {
        super();

        this.socket = undefined;
        this.sender = "crockett";

        this.state = {
            text: 'hello from samsung',
            data: [
                this.createMessage('hello', 'crockett'),
                this.createMessage('hello', 'iro4ka_inc'),
            ],
        }
    }

    createMessage(text, sender) {
        return {
            sender,
            text,
            id: this.id++
        }
    }

    addMessage = (text, sender) => {
        const newMessage = this.createMessage(text, sender);

        this.setState(({data}) => {
            const newArray = [...data, newMessage];
            return {
                data: newArray
            }
        })
    }

    componentDidMount() {
        this.socket = new WebSocket('ws://192.168.0.102:8080');

        this.socket.onopen = () => this.socket.send(this.state.text);

        this.socket.onmessage = (e) => {
            if(typeof e.data === 'string') {
                this.addMessage(e.data, "crockett");
            }
        }
    }

    render() {
        return (
            <Box p="2" flex={1} safeArea>
                <KeyboardAvoidingView h={{
                    base: "400px",
                    lg: "auto"
                }} behavior={Platform.OS === "ios" ? "padding" : "height"} h="100%">
                    <HStack>
                        <IconButton><ArrowBackIcon w="24px" h="24px" /></IconButton>
                        <Avatar bg="purple.100" size="md" />
                        <VStack pl="10px" pb="16px">
                            <Text fontSize="md" bold>Crockett</Text>
                            <Text fontSize="sm">Online</Text>
                        </VStack>
                    </HStack>
                    <Divider />
                    <VStack flex="1" justifyContent="flex-end" w="100%">
                        <FlatList data={this.state.data} renderItem={({ item }) => <Message text={item.text} sender={item.sender} />} keyExtractor={item => item.id} />
                        <HStack>
                            <IconButton><VectorImage source={require('./sticker-emoji.svg')} /></IconButton>
                            <Input placeholder="Write a message..." variant="unstyled" onSubmitEditing={(event) => { this.socket.send(event.nativeEvent.text) }} />
                        </HStack>
                    </VStack>
                </KeyboardAvoidingView>
            </Box>
        )
    };
}