// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Locale } from '@configs/i18n'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

type DefaultSuggestionsType = {
  sectionLabel: string
  items: {
    label: string
    href: string
    icon?: string
  }[]
}

const defaultSuggestions: DefaultSuggestionsType[] = [
  {
    sectionLabel: 'معاونت های فعال',
    items: [
      {
        label: 'فناوری اطلاعات',
        href: '#',
        icon: 'tabler-device-desktop'
      },
      {
        label: 'پژوهش',
        href: '#',
        icon: 'tabler-file-description'
      },
      {
        label: 'بین الملل',
        href: '#',
        icon: 'tabler-world'
      },
      {
        label: 'پشتیبانی',
        href: '#',
        icon: 'tabler-lifebuoy'
      }
    ]
  },
  {
    sectionLabel: 'نرم افزار های محبوب',
    items: [
      {
        label: 'تقویم',
        href: '#',
        icon: 'tabler-file-info'
      },
      {
        label: 'هوش مصنوعی',
        href: '#',
        icon: 'tabler-file-info'
      },
      {
        label: 'ابزار ها',
        href: '#',
        icon: 'tabler-file-info'
      },
      {
        label: 'تیکت',
        href: '#',
        icon: 'tabler-file-info'
      }
    ]
  },
  {
    sectionLabel: 'صفحات کاربردی',
    items: [
      {
        label: 'پرسش و پاسخ AI',
        href: '#',
        icon: 'tabler-robot'
      },
      {
        label: 'رستوران',
        href: '#',
        icon: 'tabler-chef-hat'
      },
      {
        label: 'کیف پول',
        href: '#',
        icon: 'tabler-wallet'
      },
      {
        label: 'تاریخچه',
        href: '#',
        icon: 'tabler-history-toggle'
      }
    ]
  },
  {
    sectionLabel: 'نمونه',
    items: [
      {
        label: 'تست',
        href: '#',
        icon: 'tabler-layout'
      },
      {
        label: 'تست',
        href: '#',
        icon: 'tabler-layout'
      },
      {
        label: 'تست',
        href: '#',
        icon: 'tabler-layout'
      },
      {
        label: 'تست',
        href: '#',
        icon: 'tabler-layout'
      }
    ]
  }
]

const DefaultSuggestions = ({ setOpen }: { setOpen: (value: boolean) => void }) => {
  // Hooks
  const { lang: locale } = useParams()

  return (
    <div className='flex grow flex-wrap gap-x-[48px] gap-y-8 plb-14 pli-16 overflow-y-auto overflow-x-hidden bs-full'>
      {defaultSuggestions.map((section, index) => (
        <div
          key={index}
          className='flex flex-col justify-center overflow-x-hidden gap-4 basis-full sm:basis-[calc((100%-3rem)/2)]'
        >
          <p className='text-xs leading-[1.16667] uppercase text-textDisabled tracking-[0.8px]'>
            {section.sectionLabel}
          </p>
          <ul className='flex flex-col gap-4'>
            {section.items.map((item, i) => (
              <li key={i} className='flex'>
                <Link
                  href={getLocalizedUrl(item.href, locale as Locale)}
                  className='flex items-center overflow-x-hidden cursor-pointer gap-2 hover:text-primary focus-visible:text-primary focus-visible:outline-0'
                  onClick={() => setOpen(false)}
                >
                  {item.icon && <i className={classnames(item.icon, 'flex text-xl')} />}
                  <p className='text-[15px] leading-[1.4667] truncate'>{item.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default DefaultSuggestions
