import { Box, Text } from 'native-base';
import React from 'react';

const Message = ({ text, sender }) => {
    return (
        <Box alignItems={(sender === "crockett") ? "flex-end" : "flex-start"}>
            <Box bg={(sender === "crockett") ? "lightBlue.200" : "lightBlue.300"} rounded="lg" m="1" p="1" w="70%">
                <Text fontSize="md" bold>{sender}</Text>
                <Text fontSize="sm">{text}</Text>
            </Box>
        </Box>
    );
}

export default Message;