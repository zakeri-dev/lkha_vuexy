'use client'
import { BubbleChat, FullPageChat } from 'flowise-embed-react'

const ChatPup = () => {
  return (
    <BubbleChat
      chatflowid='027b31fe-75ef-405c-bfa2-4f441fd401ad'
      apiHost='https://flow-ai.app.khi.local'
      theme={{
        button: {
          backgroundColor: '#fcd34d',
          right: 20,
          bottom: 20,
          size: 48,
          dragAndDrop: true,
          iconColor: 'white',
          customIconSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
          autoWindowOpen: {
            autoOpen: true,
            openDelay: 2,
            autoOpenOnMobile: false
          }
        },
        tooltip: {
          showTooltip: true,
          tooltipMessage: 'سلام همکار 👋!',
          tooltipBackgroundColor: 'black',
          tooltipTextColor: 'white',
          tooltipFontSize: 16
        },
        customCSS: `
          * {
            font-family: 'IRANSansX', 'IRANSansX Fallback';
            .flex.justify-end.mb-2.items-end.guest-container {
                display: flex;
                justify-content: flex-start !important;
            }
            .flex.flex-row.items-center.w-full.h-\[50px\].absolute.top-0.left-0.z-10 {
                  padding-right: 10px !important;
              }
          }
        `,
        chatWindow: {
          showTitle: true,
          showAgentMessages: true,
          title: 'دانا',

          // titleAvatarSrc: 'https://cms.app.khi.local/assets/b7821cdc-0734-46a4-a341-aa232c19d4dc',
          welcomeMessage: 'سلام! امیدوارم بتونم در کنارت باشم و بخوبی بهت کمک کنم.',
          errorMessage: 'فکر کنم مشکلی پیش اومده! کمی صبر کن همکار',
          backgroundColor: '#ffffff',
          backgroundImage: 'enter image path or link',
          height: 700,
          width: 400,
          fontSize: 16,
          starterPrompts: ['هدهد کیه؟', 'چه کمکی های ازم بر میاد؟'],
          starterPromptFontSize: 15,
          clearChatOnReload: false,
          sourceDocsTitle: 'منبع:',
          renderHTML: true,
          botMessage: {
            backgroundColor: '#f7f8ff',
            textColor: '#303235',
            showAvatar: false,
            avatarSrc: 'http://192.168.102.70:3009/images/illustrations/characters/hodhod.jpg'
          },
          userMessage: {
            backgroundColor: '#fcd34d',
            textColor: '#000',
            showAvatar: false,
            avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png'
          },
          textInput: {
            placeholder: 'لطفا نیاز یا سوال خودت رو با من در میون بزار',
            backgroundColor: '#ffffff',
            textColor: '#303235',
            sendButtonColor: '#182da3',
            maxChars: 100,
            maxCharsWarningMessage: 'در هنگام نوشتن کمی محدودیت کاراکتر داریم، یکم متنت رو کوتاه تر کن لطفا!',
            autoFocus: true,
            sendMessageSound: true,
            sendSoundLocation: 'send_message.mp3',
            receiveMessageSound: true,
            receiveSoundLocation: 'receive_message.mp3'
          },
          feedback: {
            color: '#303235'
          },
          dateTimeToggle: {
            date: true,
            time: true
          },
          footer: {
            textColor: '#303235',
            text: 'پردازش و طراحی توسط',
            company: 'ساهم',
            companyLink: '/'
          }
        }
      }}
    />
  )
}

const ChatFull = () => {
  return <FullPageChat chatflowid='027b31fe-75ef-405c-bfa2-4f441fd401ad' apiHost='https://flow-ai.app.khi.local' />
}

export { ChatPup, ChatFull }
