import { Box, Text } from 'native-base';
import React from 'react';

const Message = ({text, sender}) => {
    return(
        <Box bg="darkBlue.500" rounded="lg" m="1">
            <Box p="1">
                <Text fontSize="md" bold>{sender}</Text>
                <Text fontSize="sm">{text}</Text>
            </Box>
        </Box>
    );
}

export default Message;