export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Camera:undefined,
  ChatScreen:undefined,
  Status:undefined,
  Calls:undefined
};

export type TabOneParamList = {
  Chat: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
export type message={
  id:String;
  content:String;
  createdAt:String;
}

export type User={
  id:String;
  name:String;
  imageUrl:String;
}
export type ChatRoom={
  id:String;
  Users:[User];
  lastMessage:message;
}