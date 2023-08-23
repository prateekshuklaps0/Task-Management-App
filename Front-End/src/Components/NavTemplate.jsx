import { VStack, Box, Image, Text, HStack, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, AvatarGroup, Avatar } from '@chakra-ui/react'
import React from 'react'
import { ListTemplate } from './ListTemplate'

export const NavTemplate = () => {
    return (
        <VStack >
            <Box>
                <Box display={"flex"} justifyContent={'space-between'} width={"800px"}>
                    <HStack>
                        <Box w="40px" h="40px">
                            <Image
                                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTgThedKIwaCdOBY2NmhBXRbcBkodCVCwGw&usqp=CAU"}
                                alt=""
                                w={"100%"}
                                h={"100%"}
                                objectFit="contain"
                            />
                        </Box>
                        <Heading size={"md"} color="gray.700">PROJECT NAME</Heading>
                    </HStack>
                    <Box>
                        <AvatarGroup size='md' max={2} >
                            <Avatar name='Ryan Florence' src='https://bit.ly/broken-link' />
                            <Avatar name='Segun Adebayo' src='https://bit.ly/broken-link' />
                            <Avatar name='Kent Dodds' src='https://bit.ly/broken-link' />
                            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/broken-link' />
                            <Avatar name='Christian Nwamba' src='https://bit.ly/broken-link' />
                        </AvatarGroup>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Tabs variant='enclosed' defaultIndex={1} width={"800px"}>
                    <TabList>
                        <Tab>Overview</Tab>
                        <Tab>List</Tab>
                        <Tab>Board</Tab>
                        <Tab>Dashboard</Tab>
                    </TabList>

                    <TabPanels >
                        <TabPanel>
                            <p>Overview!</p>
                        </TabPanel>

                        <TabPanel>
                            <ListTemplate />
                        </TabPanel>

                        <TabPanel>
                            <p>Board!</p>
                        </TabPanel>

                        <TabPanel>
                            <p>Dashboard!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </VStack>
    )
}