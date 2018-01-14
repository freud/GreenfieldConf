$patterns = @(
    @{ name = "Agenda";      address = "schedule.html" },
    @{ name = "Prelegenci";  address = "speakers.html" },
    @{ name = "Partnerzy";   address = "partners.html" },
    @{ name = "Lokalizacja"; address = "location.html" },
    @{ name = "Kontakt"; address = "location.html" },
    @{ name = "Aktualnoœci"; address = "news.html" },
    @{ name = "Kup bilet";   address = "buy-ticket.html" }
)

dir *.html -name | foreach {
    Write-Verbose "Fixing $_" -Verbose
    $lines = Get-Content $_ -Encoding UTF8
    for ($l = 0; $l -lt $lines.Count; $l++) {
        foreach ($p in $patterns) {
            if ($lines[$l] -match ('<a.*?(href=[''"].+?[''"]).*?>' + $p.name + '<[\/]a>')) {
                Write-Verbose "Found link to fix: $($lines[$l])" -Verbose
                $lines[$l] = $lines[$l].Replace($Matches[1], "href=`"$($p.address)`"")
                Write-Verbose "Fixed: $($lines[$l])" -Verbose
            }
        }
    }
    $lines | Out-File $_ -Encoding UTF8
}
