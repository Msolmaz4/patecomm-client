import React from "react";
import { Button, Box, Image } from "@chakra-ui/react";
//anlik zamani ayarliyoruz
import moment from 'moment'
import { Link } from "react-router-dom";

const Card = ({item}) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3px">
      <Link to={`/detail/${item.id}`}>
        <Image src={item.photos[0]} alt="" loading="lazy"/>
     
      <Box p="6">
        <Box d="flex" alignItems="baseline">
        {moment(item.createdAT).format('DD/MM/YYYY')}
        </Box>
        <Box mt="mt-1" fontWeight="semibold" as="h4" lineHeight="tight">
          {item.title}
        </Box>
        <Box> {item.price}</Box>
      </Box>
      </Link>
      <Button colorScheme="pink">Add </Button>
    </Box>
    
  );
};

export default Card;
