$add_after_line = @(
    @{
        line = '<h6 class="heading7">KONTAKT</h6>';
        add = '              <p>Poni¿ej znajduje siê kontakt do organizatorów, oraz lokalizacjê samej konferencji. Prosimy przed napisaniem z pytaniem o&nbsp;zapoznanie siê ze stron¹ aktualnoœci</p>'
        emit = $false
    }
)

$remove_patterns = @(
    '<li><i class="fa fa-code"></i><a href="*">Kontakt</a></li>'
)

dir *.html -name | Foreach {
    $path = $_
    Write-Verbose "Processing $path" -Verbose
    $result = Get-Content $path -Encoding UTF8 | Foreach {
        $line = $_
        foreach ($aal in $add_after_line) {
            if ($aal.emit) {
                if ($line -ne $aal.add) {
                    Write-Verbose "Emitting: $($aal.add)" -Verbose
                    $aal.add
                }
                $aal.emit = $false
            } elseif ($line -like "*$($aal.line)*") {
                Write-Verbose "Found pattern to emit: $($aal.line)" -Verbose
                $aal.emit = $true
            }
        }

        $emit_line = $true
        foreach ($r in $remove_patterns) {
            if ($line -like "*$r*") {
                Write-Warning "Removing: $line"
                $emit_line = $false
                break;
            }
        }

        if ($emit_line) {
            $line
        }
    }
    $result | Out-File $path -Encoding UTF8
}
