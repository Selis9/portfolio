import { AcademicCapIcon, ComputerDesktopIcon, CodeBracketIcon } from '@heroicons/react/20/solid'

const timeline = [
  {
    id: 1,
    content: 'B.S in Information Systems at',
    target:'CSULB',
    date: 'May 2014',
    dateTime: '2014-05',
    icon: AcademicCapIcon,
    iconBackground: 'bg-orange-300'
  },
  {
    id: 2,
    content: 'IT Helpdesk at',
    target:'Drybar',
    date: 'May 2014',
    dateTime: '2014-05',
    icon: ComputerDesktopIcon,
    iconBackground:'bg-blue-200'
  },
  {
    id: 3,
    content: 'Network Administrator at',
    target:'Drybar',
    date: 'Jul 2017',
    dateTime: '2017-07',
    icon: ComputerDesktopIcon,
    iconBackground:'bg-blue-200'
  },
  {
    id: 4,
    content: 'IT Manager at',
    target:'Drybar',
    date: 'Feb 2021',
    dateTime: '2021-02',
    icon: ComputerDesktopIcon,
    iconBackground:'bg-blue-200'
  },
  {
    id: 5,
    content: 'Software Engineering Bootcamp at',
    target:'Hack Reactor',
    date: 'July 2022',
    dateTime: '2022-07',
    icon: AcademicCapIcon,
    iconBackground: 'bg-orange-300'
  },
  {
    id: 6,
    content: 'Software Developer at',
    target:'Tellafriend',
    date: 'Jan 2023',
    dateTime: '2023-01',
    icon: CodeBracketIcon,
    iconBackground: 'bg-blue-200'
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Timeline = () => {
  return (
    <div id="timeline" className="bg-neutral-900 py-24 sm:py-32 px-8 h-fit">
      <div className="max-w-4xl mx-auto pr-32">
        <p className="text-base font-semibold leading-7 text-blue-200">Timeline</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-4xl mb-10">A little visual history.</h1>
        <ul role="list" className="mx-auto max-w-7xl px-6 lg:px-8">
          {timeline.map((event, eventIdx) => (
            <li key={event.id}>
              <div className="relative pb-8">
                {eventIdx !== timeline.length - 1 ? (
                  <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-white-200" aria-hidden="true" />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span
                      className={classNames(
                        event.iconBackground,
                        'h-10 w-10 rounded-full flex items-center justify-center ring-2 ring-white'
                      )}
                    >
                      <event.icon className="h-6 w-6 text-black" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-2">
                    <div>
                      <p className="text-md text-white pl-5">
                        {event.content}{' '}
                        <a className="font-medium text-orange-200">
                          {event.target}
                        </a>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-md text-white">
                      <time dateTime={event.datetime}>{event.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Timeline;