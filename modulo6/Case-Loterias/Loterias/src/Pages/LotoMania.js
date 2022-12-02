import React, { useContext, useEffect } from "react"
import { Text, Box, Flex, Image } from "@chakra-ui/react"
import ContextLoterias from "../Global/GlobalContext"
import logo from "../Assets/logo.png"
import { Headers } from "../Components/Headers"
import moment from "moment"

moment.locale("pt-br")

export const LotoMania = () => {

  const { concurso, getConcursoData } =
    useContext(ContextLoterias)

  useEffect(() => {
    getConcursoData("2167")
  }, [])

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      h={"100vh"}
      w={"100vw"}
    >
      <Flex
        bg="#ffab64"
        direction={"column"}
        justify={"space-between"}
        align={"center"}
        p={10}
        minW={"400px"}
      >
        <Headers />
        <Flex alignItems={"center"} marginTop={"10%"} direction={"column"} justifyItems={"center"}>
          <Image w={"70px"} h={"70px"} src={logo}></Image>
          <Text
            fontSize={"30px"}
            fontWeight={700}
            color={"white"}
            fontFamily={" Montserrat"}
            marginTop={"2%"}
          >
            LotoMania
          </Text>
        </Flex>

        <Box color={"white"}>
          <Text>Concurso</Text>
          <Text fontWeight={"bold"}>
            {concurso.id} - {moment(concurso.data).format("L")}
          </Text>
        </Box>
      </Flex>

      <Flex
        p={5}
        bg="lightgray"
        pos={"relative"}
        justifyContent="center"
        align="center"
        h={"100vh"}
        w={"100vw"}
      >
        <Box as="div" className="corner"></Box>

        <Flex flexWrap={"wrap"} zIndex={5}>
          {concurso.numeros.map((numero) => {
            return (
              <Flex
                bg={"white"}
                ml={"10px"}
                mb={"10px"}
                h={"50px"}
                w={"50px"}
                justify={"center"}
                align={"center"}
                borderRadius={"50%"}
                key={numero.id}
                fontWeight="bold"
              >
                {numero}
              </Flex>
            )
          })}
        </Flex>
      </Flex>
    </Flex>
  )
}