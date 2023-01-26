import {Navigate} from "react-router-dom"

export function Landing() {
    return <h2>Landing Page (Public)</h2>
}

export function Home() {
    return <h2>Home Page (Private)</h2>
}

export function Dashboard() {
    return <h2>Dashboard Page (Private)</h2>
}

export function Analytics() {
    return <h2>Analytics Page (Private, premission: 'analize')</h2>
}

export function Admin() {
    return <h2>Admin (Private, premission: 'admin')</h2>
}