import useTranslation from 'next-translate/useTranslation'
import { Popover, Transition } from '@headlessui/react'
import { useState } from 'react'
import { usePopper } from 'react-popper'
import setLanguage from 'next-translate/setLanguage'

const Footer = () => {
  const { t, lang } = useTranslation('common')
  let [referenceElement, setReferenceElement] = useState()
  let [popperElement, setPopperElement] = useState()
  let { styles, attributes } = usePopper(referenceElement, popperElement)
  return (
    <div className="flex w-full">
      <div className="flex justify-between text-black-100 container mx-auto text-12 items-center py-4 ">
        <div>© 2020 Omise. All Rights Reserved</div>
        <div className="flex divide-x-2">
          <Popover className="relative px-2">
            <>
              <Popover.Button
                ref={setReferenceElement}
                className="flex space-x-1 cursor-pointer"
                as="div"
              >
                {/* <img
                  src="/images/icons/translate.png"
                  style={{ width: 18, height: 15 }}
                /> */}
                <i className="fas fa-chevron-left"></i>
                <span>{lang === 'th' ? 'ไทย' : 'English'}</span>
              </Popover.Button>
              <Transition
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  ref={setPopperElement}
                  style={styles.popper}
                  {...attributes.popper}
                  className="text-black absolute z-10 w-fit p-4 mb-3 transform flex flex-col rounded shadow space-y-4"
                >
                  <div
                    className="cursor-pointer"
                    onClick={async () => await setLanguage('th')}
                  >
                    ไทย
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={async () => await setLanguage('en')}
                  >
                    English
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          </Popover>
          <div className="flex space-x-2 px-2">
            <div>{t('footer.about')}</div>
            <div>{t('footer.help')}</div>
            <div>{t('footer.terms')}</div>
            <div>{t('footer.privacy')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
